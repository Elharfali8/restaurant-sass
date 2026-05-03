import PageTitle from "@/components/dashboard/PageTitle";
import ProductsClientPage from "./ProductsClientPage";

const ProductsPage = () => {

  return (
    <main>
      <PageTitle
        title="products"
        subTitle="manage your menu items and inventory"
      />

      <ProductsClientPage
      />
    </main>
  );
};

export default ProductsPage;