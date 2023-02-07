const [img, setImg] = useState();

const uploadImg = () => {
  const formData = new FormData();
  formData.append("file", img);
  formData.append("upload_preset", "pqsu7umy");
  axios
    .post("https://api.cloudinary.com/v1_1/dw4ey8uzt/image/upload", formData)
    .then((res) =>
      axios.post("http://localhost:5000/users", { img: res.data.secure_url })
    );
};