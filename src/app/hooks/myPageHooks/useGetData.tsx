//types
import axios from "axios";

const useGetData = <T,>(
  setUserData: React.Dispatch<React.SetStateAction<T>>
): (() => Promise<void>) => {
  async function getData() {
    try {
      // const response = await axios.get("http://localhost:3001/myPageUserData");

      const response = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "/user"
      );
      console.log(response);
      setUserData(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  return getData;
};

export default useGetData;
