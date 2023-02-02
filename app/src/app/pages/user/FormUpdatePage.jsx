import UserUpdate from "../../components/user/form/UserUpdate";

const FormUpdatePage = () => {
  return (
    <div>
      <h1 className="title">Update</h1>
      <UserUpdate />
      <style>
        {`
            .title {
                text-align: center;
            }
        `}
      </style>
    </div>
  );
};

export default FormUpdatePage;
