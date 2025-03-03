import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BedroomCleaning from "../components/service/BedroomCleaning";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

export default function BusinessGroceryPage() {
	return (
		<>
			<SEO pageTitle={"Bedroom Cleaning"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Bedroom Cleaning"
                currentPage="Bedroom Cleaning" 
            />
			<BedroomCleaning />
			<BrandOne />
			<FooterOne />
		</>
	);
}