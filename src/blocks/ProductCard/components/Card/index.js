import { Fragment } from "@wordpress/element";
import "./style.scss";

const Card = ({ data, additionalClasses, preventClick }) => {
	const {
		name,
		description,
		imageUrl,
		imageAlt,
		price,
		salePrice,
		url,
		stickers
	} = data;

	const getPrice = (price, salePrice) => {
		const priceBlockClass = "productCard__price";

		const onSalePrice = (
			<Fragment>
				<small>${price}</small>${salePrice}
			</Fragment>
		);
		const onRegularPrice = <Fragment>${price}</Fragment>;
		return (
			<div className={priceBlockClass}>
				{salePrice ? onSalePrice : onRegularPrice}
			</div>
		);
	};

	const getStickerArea = stickers => {
		const { isHot, isNew } = stickers;

		const stickerClass = "productCard__sticker";
		const hotStickerClass = "productCard__sticker-hot";
		const newStickerClass = "productCard__sticker-new";

		const hotSticker = (
			<div className={`${stickerClass} ${hotStickerClass}`}>Hot</div>
		);
		const newSticker = (
			<div className={`${stickerClass} ${newStickerClass}`}>New</div>
		);

		return (
			<div className="productCard__stickerArea">
				{isHot ? hotSticker : null}
				{isNew ? newSticker : null}
			</div>
		);
	};

	return (
		<div className={`productCard ${additionalClasses}`}>
			{stickers ? getStickerArea(stickers) : null}
			<div className="productCard__image">
				<img src={imageUrl} alt={imageAlt} />
			</div>
			<div className="productCard__details">
				<h4>{name}</h4>
				<p>{description}</p>
				<div className="productCard__detailsBottom">
					{getPrice(price, salePrice)}
				</div>
			</div>
			<a className="productCard__link" href={!preventClick ? url : "#"}>
				{" "}
			</a>
		</div>
	);
};

export default Card;
