import { FC, useRef } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import ModalProps from "../interfaces/ModalProps.interface";
import { maria } from "../assets";

const IHopeULuvItModal: FC<ModalProps>  = ({ open, setOpen }) => {
  const initialFocusRef = useRef(null);

  return (
    <>
      <Dialog
        className="relative font-open-sans z-10"
        open={open}
        onClose={setOpen}
        initialFocus={initialFocusRef}
      >
        <DialogBackdrop
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl"
            >
              <div className="bg-[#FFDAB9] px-4 pb-4 pt-3 md:pt-5 sm:p-6 sm:pb-4">
                <DialogTitle
                  as="h2"
                  className="text-center text-lg font-playwrite-dk-uloopet md:text-2xl font-bold leading-6 mb-2 md:mb-0 text-gray-900"
                >
                  Maria Mauno Pedro Luzolo
                </DialogTitle>
                <section className="w-full flex flex-col gap-y-4 md:gap-y-0 justify-center items-center md:flex-row">
                  <div className="mt-2 md:mt-4 flex justify-center w-full">
                    <img src={maria} className="w-52 rounded-lg" alt="maria" />
                  </div>
                  <div className="mt-2 md:mt-4 w-full text-center">
                      <p className="mb-5 text-lg">
                      Sentir primeiro, pensar depois <br />
                      Perdoar primeiro, julgar depois <br />
                      Amar primeiro, educar depois <br />
                      Esquecer primeiro, aprender depois
                      </p>
                      <p className="mb-5 text-lg">
                      Libertar primeiro, ensinar depois <br />
                      Alimentar primeiro, cantar depois
                      </p>
                      <p className="mb-5 text-lg">
                      Possuir primeiro, contemplar depois <br />
                      Agir primeiro, julgar depois
                      </p>
                      <p className="mb-5 text-lg">
                      Navegar primeiro, aportar depois <br />
                      Viver primeiro, morrer depois
                      </p>
                      <p className="mb-5 font-playwrite-dk-uloopet text-sm">
                      Paulo Roberto do Carmo
                      </p>
                  </div>
                </section>
              </div>
              <div className="bg-[#FFDAB9] flex px-4 md:pt-1 pb-3 sm:px-6">
                <button
                  type="button"
                  className="mb-2 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                  onClick={() => setOpen(false)}
                  ref={initialFocusRef}
                >
                  Close modal
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default IHopeULuvItModal;