/* eslint-disable react/prop-types */

const AgePrediction = ({ ageData }) => {
  return (
    <>
      <h1>Name: {ageData?.name}</h1>
      <h1>Age: {ageData?.age}</h1>
      <h1>Count: {ageData?.count}</h1>
    </>
  );
};

export default AgePrediction;
