import Navbar from "../components/Navbar";

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center items-center mt-6 gap-4">
        <h1 className="text-5xl">🎉 تهانينا! 🎉</h1>
        <p className="text-xl text-center">
          شكرًا لكِ على طلبك من Djazirat elmarra! نحن سعداء بأنك اخترت منتجاتنا
          لجمالك يمكنك زيارة موقعنا لتصفح باقي المنتجات
        </p>
        <button> بالظغط هنا</button>
      </section>
    </>
  );
};
export default ThankYou;
