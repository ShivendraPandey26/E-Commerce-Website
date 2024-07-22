import React from "react";
import Layout from "../Layout/Layout";
import AllProducts from "./AllProducts";
import Searchbar from "./Searchbar";
// import AutocompleteSelect from "./Se";

function ProductMain() {
  return (
    <>
    {/* <AutocompleteSelect />  */}
      <Layout>
          <Searchbar />
        <AllProducts />
      </Layout>
    </>
  );
}

export default ProductMain;
