import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <div className="mb-10 flex justify-between items-center">
      <img className="w-16 h-16 " src={logo} alt="hospital logo" />
      <div className="text-center">
        <h4>جامعة الأزهر</h4>
        <h4>مستشفي الحسين الجامعي</h4>
        <h4>قسم الأذن والأنف والحنجرة</h4>
        <h4 className="underline">وحدة السمعيات</h4>
      </div>
    </div>
  );
};

export default Header;
