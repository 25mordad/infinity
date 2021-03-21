import jwt from "jsonwebtoken";

const secret = "rickandmortyinfinity";

const auth = async (req, res, next) => {
  try {
      const token = req.query.token;

      if (typeof token !== 'undefined') {

        let decodedData;
        decodedData = jwt.verify(token, secret);

        req.userId = decodedData.id;

        next();
    }else{

      console.log("NOT AUTH")
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

export default auth;
