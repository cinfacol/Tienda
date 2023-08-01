"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  ShoppingCartIcon,
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Loginmodal from "./LoginModal";
import Registermodal from "./RegisterModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import ForgotPasswordConfirmModal from "./ForgotPasswordConfirmModal";
import ResendActivationModal from "./ResendActivationModal";
import { signOut, useSession } from "next-auth/react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
export default function Container({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [openResendActivation, setOpenResendActivation] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-7xl flex justify-between  items-center  gap-x-2 p-4 lg:px-20">
        {children}
        <div className="flex lg:hidden space-x-2">
          {/* <Wallet /> */}
          <ShoppingCartIcon className="h-5 w-auto" />
          {/* <Subscription /> */}
          <button
            type="button"
            className="
        rounded-full
        hover:bg-gray-50
        border
        border-gray-100
        py-2 px-3.5
        text-sm
        font-bold
        flex
        text-gray-400
        "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center gap-x-6">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">SoloPython</span>
                <Image
                  className="h-10 w-auto"
                  width={100}
                  height={100}
                  src="/assets/img/logos/logo2.png"
                  alt=""
                />
              </Link>
              <Link
                href="/auth/login"
                className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="mx-3 block rounded-lg px-3 py-2 text-base font-semibol"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mx-3 text-left w-full block rounded-lg px-3 py-2.5 text-base">
                  <button
                    onClick={() => {
                      setOpenLogin(true);
                    }}
                    className="-mx-3 text-left w-full block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => {
                      setOpenRegister(true);
                    }}
                    className="-mx-3 text-left w-full block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <Loginmodal
          open={openLogin}
          setOpen={setOpenLogin}
          setOpenForgotPassword={setOpenForgotPassword}
          setOpenRegister={setOpenRegister}
        />
        <Registermodal
          open={openRegister}
          setOpenLogin={setOpenLogin}
          setOpen={setOpenRegister}
          setOpenResendActivation={setOpenResendActivation}
        />
        <ForgotPasswordModal
          open={openForgotPassword}
          setOpen={setOpenForgotPassword}
          setOpenLogin={setOpenLogin}
        />
        <ResendActivationModal
          open={openResendActivation}
          setOpen={setOpenResendActivation}
          setOpenLogin={setOpenLogin}
        />
      </div>
    </>
  );
}
