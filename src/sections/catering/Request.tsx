import React, { useMemo, useRef, useState } from 'react';

export default function Request() {
  const [isLoading, setIsLoading] = useState(false);
  interface FormSecondary {
    name: string;
    phone: string; // stored as digits or canonical +1... depending on implementation
    eventDate: string;
    deliveryAddress: string;
    preferredMeats: string;
    numberOfAttendees: string;
    typeOfEvent: string;
    desiredSpiceLevel: string;
    notes: string;
    acceptPrivacy: boolean;
    foodAllergies: string;
  }
  const initialFormState: FormSecondary = {
    name: '',
    phone: '',
    eventDate: '',
    deliveryAddress: '',
    typeOfEvent: '',
    preferredMeats: '',
    desiredSpiceLevel: '',
    numberOfAttendees: '',
    notes: '',
    acceptPrivacy: false,
    foodAllergies: '',
  };
  const [formSecondary, setFormSecondary] =
    useState<FormSecondary>(initialFormState);
  const [phoneRaw, setPhoneRaw] = useState('');
  const phoneRef = useRef<HTMLInputElement | null>(null);

  const minDate = useMemo(() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, []);

  const onlyDigits = (s: string) => (s || '').replace(/\D/g, '');

  const normalizeTo10 = (raw: string) => {
    return onlyDigits(raw).replace(/^1/, '').slice(0, 10);
  };

  const formatUSPhoneFromDigits = (rawDigits: string) => {
    const d = onlyDigits(rawDigits || '');
    // allow an optional leading '1' while typing, but format using the 10 local digits
    const local = d.startsWith('1') ? d.slice(1) : d;
    if (!local) return '';
    const s = local.slice(0, 10);
    const a = s.slice(0, 3);
    const b = s.slice(3, 6);
    const c = s.slice(6, 10);
    let out = '+1';
    if (!a) return out;
    out += ` (${a}`;
    if (a.length === 3) out += ')';
    if (b) out += ` ${b}`;
    if (c) out += ` - ${c}`;
    return out;
  };

  const mapPosToDigitIndex = (formatted: string, pos: number) => {
    let digitCount = 0;
    for (let i = 0; i < Math.min(pos || 0, formatted.length); i++) {
      if (/[0-9]/.test(formatted[i])) digitCount++;
    }
    return digitCount; // number of digits before position
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (key !== 'Backspace' && key !== 'Delete') return;
    e.preventDefault();
    const input = e.currentTarget;
    const selStart = input.selectionStart ?? 0;
    const selEnd = input.selectionEnd ?? 0;
    const formatted = formatUSPhoneFromDigits(phoneRaw);
    const startDigitIndex = mapPosToDigitIndex(formatted, selStart);
    const endDigitIndex = mapPosToDigitIndex(formatted, selEnd);

    // local digits (no leading 1)
    const rawDigits = onlyDigits(phoneRaw || '');
    const hasLeadingOne = rawDigits.startsWith('1');
    const local = hasLeadingOne ? rawDigits.slice(1) : rawDigits;

    let localArr = local.split('');
    if (startDigitIndex === endDigitIndex) {
      if (key === 'Backspace') {
        // remove previous digit
        const idx = startDigitIndex - 1;
        if (idx >= 0) localArr.splice(idx, 1);
      } else {
        // Delete: remove digit at startDigitIndex
        const idx = startDigitIndex;
        if (idx < localArr.length) localArr.splice(idx, 1);
      }
    } else {
      // remove range of digits
      const from = Math.max(0, startDigitIndex);
      const to = Math.min(localArr.length, endDigitIndex);
      if (to > from) localArr.splice(from, to - from);
    }

    const newLocal = localArr.join('').slice(0, 10);
    const newRaw = hasLeadingOne ? '1' + newLocal : newLocal;
    setPhoneRaw(newRaw);
    const canonicalPartial = newLocal.length > 0 ? '+1' + newLocal : '';
    setFormSecondary((p) => ({ ...p, phone: canonicalPartial }));

    // restore caret position roughly at same digit index
    setTimeout(() => {
      const newFormatted = formatUSPhoneFromDigits(newRaw);
      const newDigitIndex = Math.max(
        0,
        startDigitIndex -
          (key === 'Backspace' && startDigitIndex === endDigitIndex ? 1 : 0)
      );
      // build mapping digitIndex -> char position (cursor placed after that digit)
      const mapPos: number[] = [];
      mapPos[0] = 0;
      let digitCount = 0;
      for (let i = 0; i < newFormatted.length; i++) {
        if (/[0-9]/.test(newFormatted[i])) {
          digitCount++;
          mapPos[digitCount] = i + 1;
        }
      }
      const pos = mapPos[newDigitIndex] ?? newFormatted.length;
      if (phoneRef.current) phoneRef.current.setSelectionRange(pos, pos);
    }, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formSecondary.acceptPrivacy) {
      alert(
        'Debes aceptar las Políticas de Privacidad para enviar el formulario.'
      );
      return;
    }

    setIsLoading(true);
    const data = {
      ...formSecondary,
    };

    // Aquí puedes enviar `data` al backend con fetch/axios
    console.log('Request form data:', data);
    setIsLoading(false);

    setFormSecondary(initialFormState);
    setPhoneRaw('');
  };

  const WEBHOOK = import.meta.env.PUBLIC_N8N_WEBHOOK;
  const USER = import.meta.env.PUBLIC_N8N_USER;
  const PASS = import.meta.env.PUBLIC_N8N_PASS;

  const dataPrueba = {
    name: 'Royer Prueba',
    phone: '+16723456789',
    eventDate: '2025-10-25',
    deliveryAddress: 'Las Magnolias',
    typeOfEvent: 'Corporate Lunch',
    numberOfAttendees: '100',
    preferredMeats: 'Beef, Chicken',
    desiredSpiceLevel: 'medium',
    foodAllergies: 'None',
    notes: '',
    acceptPrivacy: true,
  };

  const handleSubmit2 = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa(`${USER}:${PASS}`),
        },
        body: JSON.stringify(dataPrueba),
      });

      const text = await res.text();
      console.log('n8n response status:', res.status, text);
    } catch (err: any) {
      console.error(err);
      alert('Error al enviar: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-screen xl:w-[1211px] px-6 xl:px-0 flex justify-center items-center mb-12"
    >
      <div className="w-full max-w-[565px] h-auto flex flex-col justify-center items-center gap-3.5">
        <label className="relative block w-full">
          <span className="sr-only">Full Name</span>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            required
            value={formSecondary.name}
            onChange={(e) =>
              setFormSecondary((p) => ({ ...p, name: e.target.value }))
            }
            className="peer w-full px-5 py-3 text-[16px] text-black focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 pr-10"
          />
          <span
            aria-hidden="true"
            className="absolute left-24 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none opacity-0 transition-opacity duration-150 peer-placeholder-shown:opacity-100"
          >
            *
          </span>
        </label>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[15px] w-full">
          <label className="relative block w-full">
            <span className="sr-only">Phone</span>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="Phone"
              required
              ref={phoneRef}
              value={formatUSPhoneFromDigits(phoneRaw)} // muestra con +1 (...) ...
              onChange={(e) => {
                const digits = onlyDigits(e.target.value).slice(0, 11); // allow optional leading 1
                setPhoneRaw(digits);
                // compute local digits (strip leading 1 if present) and limit to 10
                const local = digits.startsWith('1') ? digits.slice(1) : digits;
                const localTrim = local.slice(0, 10);
                const canonicalPartial =
                  localTrim.length > 0 ? '+1' + localTrim : '';
                setFormSecondary((p) => ({ ...p, phone: canonicalPartial }));
              }}
              onKeyDown={handlePhoneKeyDown}
              className="peer w-full px-5 py-3 text-[16px] text-black focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 "
              autoComplete="tel-national"
            />

            <span
              aria-hidden="true"
              className="absolute left-[70px] top-1/2 -translate-y-1/2 text-red-500 pointer-events-none opacity-0 transition-opacity duration-150 peer-placeholder-shown:opacity-100"
            >
              *
            </span>
          </label>
          <label className="relative block w-full">
            <span className="sr-only">Event Date</span>
            <input
              id="eventDate"
              name="eventDate"
              type="date"
              placeholder="Event Date"
              required
              min={minDate}
              value={formSecondary.eventDate}
              onChange={(e) =>
                setFormSecondary((p) => ({
                  ...p,
                  eventDate: e.target.value,
                }))
              }
              className="peer w-full px-5 py-3 text-[16px] text-black focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 "
            />
          </label>
        </div>
        <label className="relative block w-full">
          <span className="sr-only">Event Address</span>
          <input
            id="deliveryAddress"
            name="deliveryAddress"
            type="text"
            placeholder="Delivery Address"
            value={formSecondary.deliveryAddress}
            onChange={(e) =>
              setFormSecondary((p) => ({
                ...p,
                deliveryAddress: e.target.value,
              }))
            }
            className="peer w-full px-5 py-3 text-[16px] text-black focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 "
            required
          />
          <span
            aria-hidden="true"
            className="absolute left-[140px] top-1/2 -translate-y-1/2 text-red-500 pointer-events-none opacity-0 transition-opacity duration-150 peer-placeholder-shown:opacity-100"
          >
            *
          </span>
        </label>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[15px] w-full">
          <label className="relative block w-full">
            <span className="sr-only">Type of Event</span>
            <input
              id="typeOfEvent"
              name="typeOfEvent"
              type="text"
              placeholder="Type of Event"
              value={formSecondary.typeOfEvent}
              onChange={(e) =>
                setFormSecondary((p) => ({
                  ...p,
                  typeOfEvent: e.target.value,
                }))
              }
              className="peer w-full px-5 py-3 text-[16px] text-black focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 pr-10"
              required
            />
            <span
              aria-hidden="true"
              className="absolute left-[120px] top-1/2 -translate-y-1/2 text-red-500 pointer-events-none opacity-0 transition-opacity duration-150 peer-placeholder-shown:opacity-100"
            >
              *
            </span>
          </label>
          <label className="relative block w-full">
            <span className="sr-only">How many attendees?</span>
            <input
              id="numberOfAttendees"
              name="numberOfAttendees"
              type="text"
              placeholder="How many attendees?"
              value={formSecondary.numberOfAttendees}
              onChange={(e) =>
                setFormSecondary((p) => ({
                  ...p,
                  numberOfAttendees: e.target.value,
                }))
              }
              className="peer w-full px-5 py-3 text-[16px] text-black focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 "
              required
            />
            <span
              aria-hidden="true"
              className="absolute left-[180px] top-1/2 -translate-y-1/2 text-red-500 pointer-events-none opacity-0 transition-opacity duration-150 peer-placeholder-shown:opacity-100"
            >
              *
            </span>
          </label>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[15px] w-full">
          <label className="relative block w-full">
            <span className="sr-only">Preferred meats</span>
            <input
              id="preferredMeats"
              name="preferredMeats"
              type="text"
              placeholder="Preferred meats"
              value={formSecondary.preferredMeats}
              onChange={(e) =>
                setFormSecondary((p) => ({
                  ...p,
                  preferredMeats: e.target.value,
                }))
              }
              className="peer w-full px-5 py-3 text-[16px] text-black focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 pr-10"
              required
            />
            <span
              aria-hidden="true"
              className="absolute left-[135px] top-1/2 -translate-y-1/2 text-red-500 pointer-events-none opacity-0 transition-opacity duration-150 peer-placeholder-shown:opacity-100"
            >
              *
            </span>
          </label>
          <label className="relative block w-full">
            <span className="sr-only">Desired spice level</span>
            <select
              id="desiredSpiceLevel"
              name="desiredSpiceLevel"
              value={formSecondary.desiredSpiceLevel}
              onChange={(e) =>
                setFormSecondary((p) => ({
                  ...p,
                  desiredSpiceLevel: e.target.value,
                }))
              }
              className={`peer appearance-none w-full px-5 py-3 text-[16px] ${formSecondary.desiredSpiceLevel ? 'text-black' : 'text-gray-500'} focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 `}
              required
            >
              <option value="" hidden>
                Desired spice level
              </option>
              <option value="none">None</option>
              <option value="medium">Medium</option>
              <option value="spicy">Spicy</option>
            </select>
            {/* Custom arrow */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 8l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>
        </div>
        <label className="relative block w-full">
          <span className="sr-only">Any food allergies or restrictions?</span>
          <input
            id="foodAllergies"
            name="foodAllergies"
            type="text"
            placeholder="Any food allergies or restrictions?"
            value={formSecondary.foodAllergies}
            onChange={(e) =>
              setFormSecondary((p) => ({
                ...p,
                foodAllergies: e.target.value,
              }))
            }
            className="peer w-full px-5 py-3 text-[16px] text-black focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 "
            required
          />
          <span
            aria-hidden="true"
            className="absolute left-[260px] top-1/2 -translate-y-1/2 text-red-500 pointer-events-none opacity-0 transition-opacity duration-150 peer-placeholder-shown:opacity-100"
          >
            *
          </span>
        </label>
        <textarea
          name="notes"
          id="notes"
          placeholder="Notes / Special Request"
          value={formSecondary.notes}
          onChange={(e) =>
            setFormSecondary((p) => ({ ...p, notes: e.target.value }))
          }
          className="p-5 border border-[#D3D3D3] rounded-[20px] w-full h-[120px] focus:outline-none focus:border-accent-3 text-[16px] text-black bg-white resize-none"
        ></textarea>
        <div className="flex flex-col gap-2.5 w-full">
          <p className="text-[14px] hidden">(*) Campos Obligatorios</p>
          <label htmlFor="acceptPrivacy" className="flex items-start gap-3">
            <input
              id="acceptPrivacy"
              name="acceptPrivacy"
              type="checkbox"
              checked={formSecondary.acceptPrivacy}
              onChange={(e) =>
                setFormSecondary((p) => ({
                  ...p,
                  acceptPrivacy: e.target.checked,
                }))
              }
              required
              className="mt-1 w-4 h-4 rounded border-accent-3"
            />
            <span className="text-[14px] leading-[140%] text-paragraph">
              I accept the Privacy Policies of SSAYS
            </span>
          </label>
        </div>
        <button
          className={`${isLoading ? 'opacity-50 cursor-not-allowed' : ''} bg-accent-3 py-[18px] px-6 rounded-3xl flex justify-center items-center hover:bg-accent-4 transition-all duration-200 ease-in-out hover:-translate-y-1 w-full cursor-pointer`}
          type="submit"
          disabled={isLoading}
        >
          <p className="text-white text-[16px] font-medium">Send </p>
        </button>
      </div>
      <button
        type="button"
        onClick={handleSubmit2}
        className={`${isLoading ? 'opacity-50 cursor-not-allowed' : ''} bg-accent-3 py-[18px] px-6 rounded-3xl justify-center items-center hover:bg-accent-4 transition-all duration-200 ease-in-out hover:-translate-y-1 w-full cursor-pointer hidden`}
        disabled={isLoading}
      >
        <p className="text-white text-[16px] font-medium">Enviar n8n</p>
      </button>
    </form>
  );
}
