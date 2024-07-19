import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  MariaModal,
  MaunoModal,
  PedroModal,
  LuzoloModal,
  IHopeULuvItModal,
} from "../modals";

const navigation = [
  { name: "HBD", modalKey: null, current: true },
  { name: "Maria", modalKey: "maria", current: false },
  { name: "Mauno", modalKey: "mauno", current: false },
  { name: "Luzolo", modalKey: "luzolo", current: false },
  { name: "Pedro", modalKey: "pedro", current: false },
];

function classNames(
  ...classes: (string | undefined | null | boolean)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [modals, setModals] = useState({
    maria: false,
    mauno: false,
    pedro: false,
    luzolo: false,
  });

  const handleOpenModal = (key: string | null) => {
    if (key) {
      setModals((prev) => ({ ...prev, [key]: true }));
    }
  };

  return (
    <>
      <Disclosure as="nav" className="bg-[#FF7F50] font-cabin">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-black hover:text-[#FF7F50] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <FontAwesomeIcon
                      className="text-3xl"
                      icon={faBirthdayCake}
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleOpenModal(item.modalKey)}
                          className={classNames(
                            item.current
                              ? "bg-black text-[#FFDAB9]"
                              : "text-[#FFDAB9] hover:bg-[#E37046] transition-all",
                            "rounded-md px-3 py-2 text-md font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setOpen(true)}
                        className="block px-4 py-2 text-md font-bold text-[#FFDAB9] border-2 border-[#FFDAB9] rounded-lg hover:text-[#FF7F50] hover:bg-[#FFDAB9] transition-all"
                      >
                        I hope u luv it
                      </button>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="button"
                    onClick={() => handleOpenModal(item.modalKey)}
                    className={classNames(
                      item.current
                        ? "bg-black text-[#FFDAB9]"
                        : "text-[#FFDAB9] hover:bg-[#E37046] hover:text-white transition-all",
                      "block rounded-md px-3 py-2 w-full text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      <MariaModal
        open={modals.maria}
        setOpen={(open) => setModals({ ...modals, maria: open })}
      />
      <MaunoModal
        open={modals.mauno}
        setOpen={(open) => setModals({ ...modals, mauno: open })}
      />
      <PedroModal
        open={modals.pedro}
        setOpen={(open) => setModals({ ...modals, pedro: open })}
      />
      <LuzoloModal
        open={modals.luzolo}
        setOpen={(open) => setModals({ ...modals, luzolo: open })}
      />
      <IHopeULuvItModal open={open} setOpen={setOpen} />
    </>
  );
}
