import React from "react";

const CountryInfo = ({
  params,
}: {
  params: {
    countryId: string;
  };
}) => {
  return <div className="flex mt-[200px]">CountryInfo {params.countryId}</div>;
};

export default CountryInfo;
