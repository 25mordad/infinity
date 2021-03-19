

import pkg from 'rickmortyapi';
const { getCharacter } = pkg;



///get list
export const getList = async (req,res) => {

const { id } = req.params;


  try {
    const list = await getCharacter({ page: id });


    res.status(200).json(list);

  } catch (e) {
    res.status(404).json({ message: error.message });
  }
}


///get charac
export const getCharac = async (req,res) => {

const { id } = req.params;


  try {

    const charac = await getCharacter(parseInt(id));

    res.status(200).json(charac);

  } catch (e) {
    res.status(404).json({ message: error.message });
  }
}
