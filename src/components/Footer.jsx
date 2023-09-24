export default function Footer(){
  return(<footer className=" mt-20 py-5 bg-[#3C3C34] w-full flex flex-row justify-between self-baseline">
  <section className="px-3 lg:pl-28  text-[#f5f5f5] ">
    <h2 className="text-[1.5rem] font-light  ">About the shop</h2>
    <p className="whitespace-pre-line  ">
      The story of Leo and Violette, it&apos;s ours.We are Léo Dominguez & Violette
      Polchi. Two Parisian lovers sharing our lives for more than 8 years. Since
      the early days of our meeting, we always had the dream to develop a
      project together. Here it is!Thanks to Léo et Violette for allowing us to
      use their products in this demo store
    </p>
  </section>
  <section className="px-3 lg:pr-28 text-[#f5f5f5]  ">
    <h2 className="text-[1.5rem] font-light ">Contact</h2>
    <a
      role="button"
      href="/"
      className=" block py-2 no-underline text-[#F5F5F5]"
    >
      Facebook
    </a>
    <a
      role="button"
      href="/"
      className=" block py-2 no-underline text-[#F5F5F5]"
    >
      Twitter
    </a>
    <a
      role="button"
      href="/"
      className=" blcok py-2  no-underline text-[#F5F5F5]"
    >
      Instagram
    </a>
    <a
      role="button"
      href="/"
      className=" block py-2  no-underline text-[#F5F5F5]"
    >
      Github
    </a>
  </section>
</footer>)
}
