import Navbar from "../components/Navbar";

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center items-center mt-6 gap-4 px-16">
        <h1 className="text-5xl">🎉 تهانينا! 🎉</h1>
        <p className="text-xl text-center">
          شكرًا لكِ على طلبك من Djazirat elmarra! نحن سعداء بأنك اخترت منتجاتنا
          لجمالك يمكنك زيارة موقعنا لتصفح باقي المنتجات
        </p>
        <a href="https://djazirat-elmarra.pages.dev/">
        <button className="text-xl px-8 py-3 border-2 rounded-xl hover:bg-pink-400">
          {" "}
          تصفح باقي المنتجات
        </button>
        </a>
       
        <p> او زيارة مواقع التواصل الاجتماعي</p>
      
        <h3 className="text-2xl">📦📧 سنتصل بك قريبا لتأكيد الطلبية</h3>
        <p className="text-lg">تاكد ان يكون هاتفك يشتغل </p>
        <p className="text-lg text-center">إذا كان لديك أي استفسارات أو تحتاجين إلى مساعدة إضافية، لا تترددي في التواصل معنا عبر رسالة خاصة أو زيارة موقعنا.</p>
        <h1 className="text-4xl">🌸 نتمنى لكِ يومًا سعيدًا 🌸</h1>
      </section>
    </>
  );
};
export default ThankYou;
