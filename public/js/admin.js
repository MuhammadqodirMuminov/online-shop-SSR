const deleteItems = btn => {
	const prodId = btn.parentNode.querySelector('[name=productId]').value;
	const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

	const closestElement = btn.closest('article');

	fetch('/admin/product/' + prodId, {
		method: 'DELETE',
		headers: {
			'csrf-token': csrf,
		},
	})
		.then(result => result.json())
		.then(data => {
			console.log(data);
			closestElement.parentNode.removeChild(closestElement);
		})
		.catch(err => {
			console.error(err);
		});
};
