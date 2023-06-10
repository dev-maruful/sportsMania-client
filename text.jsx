import Swal from "sweetalert2";
import TitleSection from "../../components/TitleSection";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgUrl = imageResponse.data.display_url;
          const { name, price, className, email, seat } = data;
          const newItem = {
            name,
            email,
            className,
            seat: parseFloat(seat),
            price: parseFloat(price),
            image: imgUrl,
            status: "pending",
          };
          axiosSecure.post("/instructors", newItem).then((data) => {
            console.log(data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Class Add On The Cart",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-10 font-bold text-xl">
      <div>
        <TitleSection
          subHeading={"what's new?"}
          heading={"Add A Class"}
        ></TitleSection>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-11/12 mx-auto">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-xl">Name</span>
            </label>
            <input
              defaultValue={user?.displayName}
              type="text"
              placeholder="Type here"
              className="input input-bordered text-gray-500 w-full"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-xl">Email</span>
            </label>

            <input
              defaultValue={user?.email}
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full text-gray-500"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-xl">
                Class Name
              </span>
            </label>

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("className", { required: true })}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-xl">
                Available Seats
              </span>
            </label>

            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("seat", { required: true })}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-xl">Price</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text semibold text-xl">Class Image</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              {...register("image", { required: true })}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add a Class"
          className="btn mt-8 font-bold bg-gray-300 hover:bg-black hover:text-white mb-4 flex w-11/12 mx-auto"
        />
      </form>
    </div>
  );
};

export default AddClass;
