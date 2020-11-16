import { h } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import { AppContext } from '../AppContext';
import { Sidebar } from '../shared';

interface MenuItem {
	id: string;
	path: string;
	icon?: string;
}

export const AppSidebar = () => {
	const { loggerService, httpService } = useContext(AppContext);
	const [items, setItems] = useState([]);

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		try {
			const menuJson = await httpService.get<Array<MenuItem>>('./public/menu.json');
			loggerService.warn(menuJson.data);
			setItems(menuJson.data);
		} catch (err) { loggerService.error(err); }
	}

	return (
		<Sidebar title="Preact TSX Starter" items={items} />
	);
}
