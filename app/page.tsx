import Image from "next/image";

const Page = () => {
  return (

<div className="bg-gray-900">
  <header className="absolute inset-x-0 top-0 z-50">
    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <Image
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt=""
            width={32}
            height={32}
            className="h-8 w-auto"
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button type="button"  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200">
          <span className="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="text-sm/6 font-semibold text-white">Product</a>
        <a href="#" className="text-sm/6 font-semibold text-white">Features</a>
        <a href="#" className="text-sm/6 font-semibold text-white">Marketplace</a>
        <a href="#" className="text-sm/6 font-semibold text-white">Company</a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm/6 font-semibold text-white">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
  </header>

  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
          Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-400"><span aria-hidden="true" className="absolute inset-0"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Data to enrich your online business</h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Get started</a>
          <a href="#" className="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      
    </div>
  </div>
</div>

  );
};

export default Page;
