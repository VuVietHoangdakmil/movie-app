import Header from "./Header";
import { Row, Col } from "antd";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Row gutter={8} className=" h-[88vh] px-2 ">
        <Col span={4}>
          <div className="bg-slate-50 w-full h-full rounded-md"></div>
        </Col>
        <Col span={20}>
          <div className="bg-slate-100 w-full h-[88vh] rounded-md overflow-auto">
            {children}
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Layout;
