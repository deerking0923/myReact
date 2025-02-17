import BasicLayout from "../layouts/BasicLayout";
import useCustomLogin from "../hooks/UseCustomLogin";


const AboutPage = () => {
  const {isLogin, moveToLoginReturn} = useCustomLogin()

  if(!isLogin){
    return moveToLoginReturn()
  }

  return (
    <BasicLayout>
      <div className="text-3xl">
        About Page임다
      </div>
    </BasicLayout>
  );
};

export default AboutPage;
