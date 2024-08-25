import { useState } from "react";
const ClientForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [myCommands, setMyCommands] = useState([]);
  return (
    <form id="order-form" className="form">
      <div className="options" style={{ display: "none" }}>
        <span translation="options">خيارات:</span>
        <div>
          <input
            type="radio"
            name="price-option"
            id="price-option-1"
            value="de916e6c-32de-4ff5-9edb-c966c9df4a37"
            data-product-id="5964b8c7-c6a9-4a55-a759-e7fc32d08868"
            data-product-name="la roshe posay baume b5 spf 50"
            data-quantity="1"
            data-price="4000"
            data-reduced-price="3900"
            defaultChecked
            required
          />
          <label htmlFor="price-option-1">
            Option name
            <span className="price-crossed">4000 دج</span>
            <span className="price">3900 دج</span>
          </label>
        </div>
      </div>

      <label className="quantity" translation="quantity">
        الكمية:
        <input
          type="number"
          name="quantity"
          defaultValue="1"
          min="1"
          required
        />
      </label>

      <input
        name="name"
        placeholder="الاسم"
        translation="placeholder_name"
        required
      />
      <input
        type="tel"
        name="phone"
        pattern="^ *(0|\\+ *2 *1 *3) *((5|6|7) *(\\d *){8}|(4 *9|2 *7|2 *9|3 *2|3 *3|3 *4|2 *5|2 *6|3 *7|4 *3|4 *6|2 *1|2 *3|3 *6|4 *8|3 *8|3 *1|4 *5|3 *5|4 *1|2 *4) *(\\d *){6}) *$"
        placeholder="رقم الهاتف"
        translation="placeholder_phone"
        required
      />

      <label translation="wilaya">
        <select name="wilaya" id="wilaya-1" required>
          <option disabled selected translation="option-wilaya">
            الولاية
          </option>
          <option value="1">أدرار</option>
          <option value="2">الشلف</option>
          <option value="3">الأغواط</option>
          {/* Add remaining options here */}
          <option value="58">المنيعة</option>
        </select>
      </label>

      <label translation="commune">
        <select name="commune" id="commune-1" required>
          <option value="" disabled selected translation="option-wilaya">
            البلدية
          </option>
          <option value="570">حسين داي</option>
          <option value="579">جسر قسنطينة</option>
          {/* Add remaining options here */}
        </select>
      </label>

      <button
        className="button buy-button wobble disabled"
        type="submit"
        translation="buy"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
        </svg>
        اشتري
      </button>

      <div className="order-summary">
        <div className="head">
          <span translation="order_summary">ملخص الطلب</span>
          <div className="accordion hide"></div>
        </div>
        <div className="body">
          <div className="subtotal">
            <span translation="subtotal">سعر الطلب</span>
            <span>3900 دج</span>
          </div>
          <div className="shipping">
            <span translation="shipping">سعر التوصيل</span>
            <div>400 دج</div>
          </div>
          <div className="total_amount">
            <span translation="total_amount">المجموع</span>
            <span>4300 دج</span>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ClientForm;
