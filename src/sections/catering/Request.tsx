import React, { useState, useMemo } from 'react';
import catering from '../../content/catering';

export default function Request() {
  const content = catering.request;
  const [selectedMeats, setSelectedMeats] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedGuacamole, setSelectedGuacamole] = useState<string[]>([]);
  const [selectedAntojitos, setSelectedAntojitos] = useState<string[]>([]);
  const [selectedDesserts, setSelectedDesserts] = useState<string[]>([]);
  const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);
  const [selectedSupplies, setSelectedSupplies] = useState<string[]>([]);
  const [selectedBeerWine, setSelectedBeerWine] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  interface FormSecondary {
    name: string;
    email: string;
    phone: string; // stored as digits or canonical +1... depending on implementation
    eventDate: string;
    deliveryTime: string;
    pickupOrDelivery: string;
    numberOfGuests: string;
    deliveryAddress: string;
    notes: string;
    acceptPrivacy: boolean;
  }
  const initialFormState: FormSecondary = {
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    deliveryTime: '',
    pickupOrDelivery: '',
    numberOfGuests: '',
    deliveryAddress: '',
    notes: '',
    acceptPrivacy: false,
  };

  const [formSecondary, setFormSecondary] =
    useState<FormSecondary>(initialFormState);

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

  const formatUSPhoneFromDigits = (digits: string) => {
    const d = normalizeTo10(digits);
    if (!d) return '';
    const a = d.slice(0, 3);
    const b = d.slice(3, 6);
    const c = d.slice(6, 10);
    if (d.length <= 3) return `+1 (${a}`;
    if (d.length <= 6) return `+1 (${a}) ${b}`;
    return `+1 (${a}) ${b}-${c}`;
  };

  const toggle = (
    value: string,
    list: string[],
    setter: (v: string[] | ((prev: string[]) => string[])) => void
  ) => {
    setter((prev: string[]) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      ...formSecondary,
      meats: selectedMeats,
      toppings: selectedToppings,
      guacamoles: selectedGuacamole,
      antojitos: selectedAntojitos,
      desserts: selectedDesserts,
      drinks: selectedDrinks,
      supplies: selectedSupplies,
      beerWine: selectedBeerWine,
    };

    // Aquí puedes enviar `data` al backend con fetch/axios
    console.log('Request form data:', data);
    setIsLoading(false);

    setFormSecondary(initialFormState);
    setSelectedMeats([]);
    setSelectedToppings([]);
    setSelectedGuacamole([]);
    setSelectedAntojitos([]);
    setSelectedDesserts([]);
    setSelectedDrinks([]);
    setSelectedSupplies([]);
    setSelectedBeerWine([]);
  };
  const MAKE_WEBHOOK =
    'https://hook.us2.make.com/8big5sykchcb9s0e3bdxzcilr48y5ppy';
  const apiKey = 'catering2025';
  const dataPrueba = {
    name: 'Royer Prueba',
    email: 'hola@gmail.com',
    phone: '+16723456789',
    eventDate: '10/22/2025',
    deliveryTime: '3:00 PM',
    pickupOrDelivery: 'Pickup',
    numberOfGuests: '100',
    deliveryAddress: 'Las Magnolias',
    notes: '',
    acceptPrivacy: true,
    meats: ['Carnitas (Roasted Pork)', 'Lengua (Beef Tongue)'],
    toppings: ['Onions'],
    guacamoles: ['Chicharrón', 'Bacon Bits'],
    antojitos: ['Sopes (Beans, meat, lettuce, tomato, sour cream & cheese)'],
    desserts: ['Tres Leches Cake – Moist and sweet, house favorite'],
    drinks: [],
    supplies: ['Plates', 'Utensils'],
    beerWine: ['I’m interested in adding beer to the order'],
  };
  const handleSubmit2 = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(MAKE_WEBHOOK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-make-apikey': apiKey,
        },
        body: JSON.stringify(dataPrueba),
      });
      const text = await res.text();
      console.log('Make response status:', res.status, text);
    } catch (err: any) {
      console.error(err);
      alert('Error al enviar: ' + err.message);
    } finally {
      // Aquí puedes enviar `data` al backend con fetch/axios
      console.log('Request form data:', dataPrueba);
      setIsLoading(false);
    }
  };
  return (
    <section className="w-full max-w-screen xl:w-[1211px] px-6 xl:px-0 flex flex-col justify-center items-center gap-10 mb-12 md:mb-[88px]">
      <h2
        dangerouslySetInnerHTML={{ __html: content.title }}
        className="text-[32px] leading-[140%] font-semibold text-black text-center"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-10 md:gap-[65px] py-10 md:py-[61px] px-4 md:px-[51px] rounded-3xl bg-[#F2ECDD] w-full"
      >
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-[67px] w-full">
          <div className="flex flex-col justify-center items-center gap-7 w-full max-w-[626px]">
            <div className="flex flex-col justify-center items-start gap-4 w-full">
              <h3 className="text-[24px] leading-[120%] font-semibold text-accent-3">
                {content.taco.title}
              </h3>
              <p className="text-[16px] font-normal leading-[140%] text-paragraph">
                {content.taco.description}
              </p>
            </div>
            <div className="flex justify-start items-start w-full gap-5 md:gap-[74px]">
              <div className="flex flex-col justify-center items-start gap-[18px]">
                <p className="text-[20px] leading-[120%] text-black">
                  {content.taco.meats.title}
                </p>
                <ul className="flex flex-col justify-center items-start gap-[18px]">
                  {content.taco.meats.items.map((item: string, idx: number) => {
                    const id = `taco-meat-${idx}`;
                    return (
                      <li key={id} className="list-none">
                        <label
                          htmlFor={id}
                          className="flex items-center gap-2.5 cursor-pointer select-none"
                        >
                          <input
                            id={id}
                            name="taco_meats[]"
                            value={item}
                            type="checkbox"
                            checked={selectedMeats.includes(item)}
                            onChange={() =>
                              toggle(item, selectedMeats, setSelectedMeats)
                            }
                            className="sr-only peer"
                          />
                          <span
                            aria-hidden="true"
                            className="w-4 h-4 rounded-full border-2 border-accent-3 flex items-center justify-center
                     transition-colors duration-150
                     peer-checked:bg-accent-3 peer-checked:border-accent-3
                     "
                          ></span>
                          <span className="text-[16px] md:text-[20px] font-normal leading-[120%] text-paragraph">
                            {item}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col justify-center items-start gap-[18px]">
                <p className="text-[20px] leading-[120%] text-black">
                  {content.taco.toppings.title}
                </p>
                <ul className="flex flex-col justify-center items-start gap-[18px]">
                  {content.taco.toppings.items.map(
                    (item: string, idx: number) => {
                      const id = `taco-topping-${idx}`;
                      return (
                        <li key={id} className="list-none">
                          <label
                            htmlFor={id}
                            className="flex items-center gap-2.5 cursor-pointer select-none"
                          >
                            <input
                              id={id}
                              name="taco_toppings[]"
                              value={item}
                              type="checkbox"
                              checked={selectedToppings.includes(item)}
                              onChange={() =>
                                toggle(
                                  item,
                                  selectedToppings,
                                  setSelectedToppings
                                )
                              }
                              className="sr-only peer"
                            />
                            <span
                              aria-hidden="true"
                              className="w-4 h-4 rounded-full border-2 border-accent-3 flex items-center justify-center
                     transition-colors duration-150
                     peer-checked:bg-accent-3 peer-checked:border-accent-3
                     "
                            ></span>
                            <span className="text-[16px] md:text-[20px] font-normal leading-[120%] text-paragraph">
                              {item}
                            </span>
                          </label>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-7">
            <div className="flex flex-col justify-center items-start gap-4">
              <h3 className="text-[24px] leading-[120%] font-semibold text-accent-3">
                {content.guacamole.title}
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: content.guacamole.description,
                }}
                className="text-[16px] font-normal leading-[140%] text-paragraph"
              />
            </div>
            <ul className="flex flex-col justify-center items-start gap-[18px]">
              {content.guacamole.items.map((item: string, idx: number) => {
                const id = `selected-guacamole-${idx}`;
                return (
                  <li key={id} className="list-none">
                    <label
                      htmlFor={id}
                      className="flex items-center gap-2.5 cursor-pointer select-none"
                    >
                      <input
                        id={id}
                        name="selected_guacamoles[]"
                        value={item}
                        type="checkbox"
                        checked={selectedGuacamole.includes(item)}
                        onChange={() =>
                          toggle(item, selectedGuacamole, setSelectedGuacamole)
                        }
                        className="sr-only peer"
                      />
                      <span
                        aria-hidden="true"
                        className="w-4 h-4 rounded-full border-2 border-accent-3 flex items-center justify-center
                     transition-colors duration-150
                     peer-checked:bg-accent-3 peer-checked:border-accent-3
                     "
                      ></span>
                      <span className="text-[16px] md:text-[20px] font-normal leading-[120%] text-paragraph">
                        {item}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-[31px] w-full">
          <div className="flex flex-col justify-center items-center gap-7 w-full max-w-[600px]">
            <div className="flex flex-col justify-center items-start gap-4 w-full">
              <h3 className="text-[24px] leading-[120%] font-semibold text-accent-3">
                {content.specials.title}
              </h3>
              <p className="text-[16px] font-normal leading-[140%] text-paragraph">
                {content.specials.description}
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-[18px] w-full">
              <p className="text-[20px] leading-[120%] text-black">
                {content.specials.title2}
              </p>
              <ul className="flex flex-col justify-center items-start gap-[18px]">
                {content.specials.items.map((item: string, idx: number) => {
                  const id = `selected-antojito-${idx}`;
                  return (
                    <li key={id} className="list-none">
                      <label
                        htmlFor={id}
                        className="flex items-center gap-2.5 cursor-pointer select-none"
                      >
                        <input
                          id={id}
                          name="selected_antojitos[]"
                          value={item}
                          type="checkbox"
                          checked={selectedAntojitos.includes(item)}
                          onChange={() =>
                            toggle(
                              item,
                              selectedAntojitos,
                              setSelectedAntojitos
                            )
                          }
                          className="sr-only peer"
                        />
                        <span
                          aria-hidden="true"
                          className="w-4 h-4 rounded-full border-2 border-accent-3 flex items-center justify-center
                     transition-colors duration-150
                     peer-checked:bg-accent-3 peer-checked:border-accent-3
                     "
                        ></span>
                        <span className="text-[16px] md:text-[20px] font-normal leading-[120%] text-paragraph">
                          {item}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-10 md:gap-[47px]">
            <div className="flex flex-col justify-center items-start gap-7">
              <div className="flex flex-col justify-center items-start gap-4">
                <h3 className="text-[24px] leading-[120%] font-semibold text-accent-3">
                  {content.desserts.title}
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: content.desserts.description,
                  }}
                  className="text-[16px] font-normal leading-[140%] text-paragraph"
                />
              </div>
              <ul className="flex flex-col justify-center items-start gap-[18px]">
                {content.desserts.items.map((item: string, idx: number) => {
                  const id = `selected-dessert-${idx}`;
                  return (
                    <li key={id} className="list-none">
                      <label
                        htmlFor={id}
                        className="flex items-center gap-2.5 cursor-pointer select-none"
                      >
                        <input
                          id={id}
                          name="selected_desserts[]"
                          value={item}
                          type="checkbox"
                          checked={selectedDesserts.includes(item)}
                          onChange={() =>
                            toggle(item, selectedDesserts, setSelectedDesserts)
                          }
                          className="sr-only peer"
                        />
                        <span
                          aria-hidden="true"
                          className="w-4 h-4 rounded-full border-2 border-accent-3 flex items-center justify-center
                     transition-colors duration-150
                     peer-checked:bg-accent-3 peer-checked:border-accent-3
                     "
                        ></span>
                        <span className="text-[16px] md:text-[20px] font-normal leading-[120%] text-paragraph">
                          {item}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start gap-7">
              <div className="flex flex-col justify-center items-start gap-4">
                <h3 className="text-[24px] leading-[120%] font-semibold text-accent-3">
                  {content.drinks.title}
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: content.drinks.description,
                  }}
                  className="text-[16px] font-normal leading-[140%] text-paragraph"
                />
              </div>
              <ul className="flex flex-col justify-center items-start gap-[18px]">
                {content.drinks.items.map((item: string, idx: number) => {
                  const id = `selected-drink-${idx}`;
                  return (
                    <li key={id} className="list-none">
                      <label
                        htmlFor={id}
                        className="flex items-center gap-2.5 cursor-pointer select-none"
                      >
                        <input
                          id={id}
                          name="selected_drinks[]"
                          value={item}
                          type="checkbox"
                          checked={selectedDrinks.includes(item)}
                          onChange={() =>
                            toggle(item, selectedDrinks, setSelectedDrinks)
                          }
                          className="sr-only peer"
                        />
                        <span
                          aria-hidden="true"
                          className="w-4 h-4 rounded-full border-2 border-accent-3 flex items-center justify-center
                     transition-colors duration-150
                     peer-checked:bg-accent-3 peer-checked:border-accent-3
                     "
                        ></span>
                        <span className="text-[16px] md:text-[20px] font-normal leading-[120%] text-paragraph">
                          {item}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-[51px] w-full">
          <div className="w-full md:w-[565px] h-auto  order-2 md:order-1 flex flex-col justify-center items-center gap-3.5">
            <label className="relative block w-full">
              <span className="sr-only">Name</span>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
                value={formSecondary.name}
                onChange={(e) =>
                  setFormSecondary((p) => ({ ...p, name: e.target.value }))
                }
                className="peer w-full px-5 py-3 text-[16px] text-black focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 pr-10"
              />
              <span
                aria-hidden="true"
                className="absolute left-16 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none opacity-0 transition-opacity duration-150 peer-placeholder-shown:opacity-100"
              >
                *
              </span>
            </label>
            <label className="relative block w-full">
              <span className="sr-only">Email</span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                value={formSecondary.email}
                onChange={(e) =>
                  setFormSecondary((p) => ({ ...p, email: e.target.value }))
                }
                className="peer w-full px-5 py-3 text-[16px] text-black focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 pr-10"
              />
              <span
                aria-hidden="true"
                className="absolute left-16 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none opacity-0 transition-opacity duration-150 peer-placeholder-shown:opacity-100"
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
                  value={formatUSPhoneFromDigits(formSecondary.phone)} // muestra con +1 (...) ...
                  onChange={(e) => {
                    // normalizamos lo que el usuario escribe -> sólo 10 dígitos locales
                    const digits = normalizeTo10(e.target.value);
                    // guardamos solo los dígitos locales (sin +1)
                    setFormSecondary((p) => ({
                      ...p,
                      phone: digits,
                    }));
                  }}
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
            <div className="flex flex-col md:flex-row justify-center items-center gap-[15px] w-full">
              <label className="relative block w-full">
                <span className="sr-only">Delivery Time</span>
                <input
                  id="deliveryTime"
                  name="deliveryTime"
                  type="text"
                  placeholder="Delivery Time"
                  required
                  value={formSecondary.deliveryTime}
                  onChange={(e) =>
                    setFormSecondary((p) => ({
                      ...p,
                      deliveryTime: e.target.value,
                    }))
                  }
                  className="peer w-full px-5 py-3 text-[16px] text-black focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 pr-10"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-30 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none opacity-0 transition-opacity duration-150 peer-placeholder-shown:opacity-100"
                >
                  *
                </span>
              </label>
              <label className="relative block w-full">
                <span className="sr-only">Pickup or Delivery</span>
                <select
                  id="pickupOrDelivery"
                  name="pickupOrDelivery"
                  value={formSecondary.pickupOrDelivery}
                  onChange={(e) =>
                    setFormSecondary((p) => ({
                      ...p,
                      pickupOrDelivery: e.target.value,
                    }))
                  }
                  className={`peer appearance-none w-full px-5 py-3 text-[16px] ${formSecondary.pickupOrDelivery ? 'text-black' : 'text-gray-500'} focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 `}
                >
                  <option value="" hidden>
                    Pickup or Delivery
                  </option>
                  <option value="pickup">Pickup</option>
                  <option value="delivery">Delivery</option>
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
            <div className="flex flex-col md:flex-row justify-center items-center gap-[15px] w-full">
              <label className="relative block w-full">
                <span className="sr-only">Number of Guests</span>
                <input
                  id="numberOfGuests"
                  name="numberOfGuests"
                  type="text"
                  placeholder="Number of Guests"
                  value={formSecondary.numberOfGuests}
                  onChange={(e) =>
                    setFormSecondary((p) => ({
                      ...p,
                      numberOfGuests: e.target.value,
                    }))
                  }
                  className="peer w-full px-5 py-3 text-[16px] text-black focus:outline-none rounded-[20px] border border-[#D3D3D3] bg-white focus:border-accent-3 pr-10"
                />
              </label>
              <label className="relative block w-full">
                <span className="sr-only">Delivery Address</span>
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
                />
              </label>
            </div>
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
              <p className="text-[14px]">(*) Campos Obligatorios</p>
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
                  Acepto las Políticas de Privacidad de SSAYS
                </span>
              </label>
            </div>
            <button
              className={`${isLoading ? 'opacity-50 cursor-not-allowed' : ''} bg-accent-3 py-[18px] px-6 rounded-3xl flex justify-center items-center hover:bg-accent-4 transition-all duration-200 ease-in-out hover:-translate-y-1 w-full cursor-pointer`}
              type="submit"
              disabled={isLoading}
            >
              <p className="text-white text-[16px] font-medium">Enviar</p>
            </button>
          </div>
          <div className="flex flex-col justify-center items-start gap-10 md:gap-[63px] order-1 md:order-2">
            <div className="flex flex-col justify-center items-start gap-8">
              <div className="flex flex-col justify-center items-start gap-4">
                <h3 className="text-[24px] leading-[120%] font-semibold text-accent-3">
                  {content.supplies.title}
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: content.supplies.description,
                  }}
                  className="text-[16px] font-normal leading-[140%] text-paragraph"
                />
              </div>
              <ul className="flex flex-col justify-center items-start gap-[18px]">
                {content.supplies.items.map((item: string, idx: number) => {
                  const id = `selected-supplie-${idx}`;
                  return (
                    <li key={id} className="list-none">
                      <label
                        htmlFor={id}
                        className="flex items-center gap-2.5 cursor-pointer select-none"
                      >
                        <input
                          id={id}
                          name="selected_supplies[]"
                          value={item}
                          type="checkbox"
                          checked={selectedSupplies.includes(item)}
                          onChange={() =>
                            toggle(item, selectedSupplies, setSelectedSupplies)
                          }
                          className="sr-only peer"
                        />
                        <span
                          aria-hidden="true"
                          className="w-4 h-4 rounded-full border-2 border-accent-3 flex items-center justify-center
                     transition-colors duration-150
                     peer-checked:bg-accent-3 peer-checked:border-accent-3
                     "
                        ></span>
                        <span className="text-[16px] md:text-[20px] font-normal leading-[120%] text-paragraph">
                          {item}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start gap-8">
              <h3 className="text-[24px] leading-[120%] font-semibold text-accent-3">
                {content.beer.title}
              </h3>
              <ul className="flex flex-col justify-center items-start gap-[18px]">
                {content.beer.items.map((item: string, idx: number) => {
                  const id = `selected-beer-${idx}`;
                  return (
                    <li key={id} className="list-none">
                      <label
                        htmlFor={id}
                        className="flex items-center gap-2.5 cursor-pointer select-none"
                      >
                        <input
                          id={id}
                          name="selected_beerswine[]"
                          value={item}
                          type="checkbox"
                          checked={selectedBeerWine.includes(item)}
                          onChange={() =>
                            toggle(item, selectedBeerWine, setSelectedBeerWine)
                          }
                          className="sr-only peer"
                        />
                        <span
                          aria-hidden="true"
                          className="w-4 h-4 rounded-full border-2 border-accent-3 flex items-center justify-center
                     transition-colors duration-150
                     peer-checked:bg-accent-3 peer-checked:border-accent-3
                     "
                        ></span>
                        <span className="text-[16px] md:text-[20px] font-normal leading-[120%] text-paragraph">
                          {item}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSubmit2}
          className={`${isLoading ? 'opacity-50 cursor-not-allowed' : ''} bg-accent-3 py-[18px] px-6 rounded-3xl justify-center items-center hover:bg-accent-4 transition-all duration-200 ease-in-out hover:-translate-y-1 w-full cursor-pointer hidden`}
          disabled={isLoading}
        >
          <p className="text-white text-[16px] font-medium">Enviar (Make)</p>
        </button>
      </form>
    </section>
  );
}
