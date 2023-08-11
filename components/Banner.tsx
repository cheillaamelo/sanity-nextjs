function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl mb-8">Blog Routeasy</h1>
        <h2>
          Bem vindos{" "}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            Todos os desenvolvedores
          </span>{" "}
          blog favorito na Roteirização
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Novos recursos do produto | O que há de mais moderno em tecnologia | Os
        pesadelos semanais de depuração e muito mais!
      </p>
    </div>
  );
}
export default Banner;
