import React, {useEffect, useState} from "react";
import { Row, Col, Card, Switch, Tabs, Image, Table, Input, Button, Upload } from "antd";
import GridScheduler from "../../../../../src/components/util-components/GridScheduler";
import DraggableBlock from "../../../../../src/components/util-components/DragableBlock";
import { updateItems } from "../../../../store/slices/schedulerSlice";
import { useDispatch } from 'react-redux';
import { DownloadOutlined, ImportOutlined } from '@ant-design/icons';

const Scheduler = () => {
	const [grid, setGrid] = useState(true);
	const [onMap, setOnMap] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [currentItems, setCurrentItems] = useState([]);
	const [position, setPosition] = useState(null);

	const [jsonData, setJsonData] = useState(null);

	const handleUpload = (event) => {
		const fileReader = new FileReader();
		fileReader.readAsText(event.file);
		fileReader.onload = () => {
			const json = JSON.parse(fileReader.result);
			setJsonData(json);
			setCurrentItems(json);
		};
	};

	const dispatch = useDispatch();

	const editСoord = (e, coord, data) => {
		if (/\D/g.test(e.target.value)) return;
		setCurrentItems(prevState => prevState.map(item => {
			console.log(item);
			console.log(data);
			if (data.id === item.id) {
				console.log("Подходит");
				return {...item, [coord]: Number(e.target.value)}
			} else {
				return item;
			}
		}))
	};

	const items = [
		{id: 1},
		{id: 2},
		{id: 3}
	];

	const columns = [
		{
			title: 'id',
			dataIndex: 'id',
			key: 'id'
		},
		{
			title: 'id_item',
			dataIndex: 'idItem',
			key: 'idItem'
		},
		{
			title: 'X',
			dataIndex: 'x',
			key: 'x',
			render: (text, record) => (
				<Input
					placeholder="Введите координату X"
					value={text}
					onChange={e => editСoord(e, "x", record)}
				/>
			)
		},
		{
			title: 'Y',
			dataIndex: 'y',
			key: 'y',
			render: (text, record) => (
				<Input
					placeholder="Введите координату Y"
					value={text}
					onChange={e => editСoord(e, "y", record)}
				/>
			)
		}
	];

	const handleChange = () => {
		setGrid(prevState => !prevState);
	};

	const handleDragStart = (e, item) => {
		console.log("drag start");
		console.log(e.clientX, e.clientY);
		const rect = e.target.getBoundingClientRect();
		console.log(rect.x, rect.y);
		setPosition({ x: e.clientX - rect.x, y: e.clientY - rect.y });
		e.target.style.background = "#989797";
		setSelectedItem(item);
	};

	const handleDragEnd = (e) => {
		console.log("drag end");
		e.target.style.background = "transparent";
	};

	const handleDragOver = () => {
		setOnMap(true);
	};
	const handleDragLeave = (e) => {
		setOnMap(false);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		const rectGrid = e.target.parentElement.parentElement.getBoundingClientRect();
		const x = Math.max(0, Math.ceil(e.clientX - position.x - rectGrid.x));
		const y = Math.max(0, Math.ceil(e.clientY - position.y - rectGrid.y));
		setSelectedItem(null)
		setCurrentItems(prevState => [...prevState, { id: prevState.length + 1, idItem: selectedItem.id, x, y }]);
		setOnMap(false);
	};

	const handleDeleteAll = () => {
		setCurrentItems([]);
	};

	const saveAll = async () => {
		console.log(currentItems);
		const jsonData = JSON.stringify(currentItems);
		const blob = new Blob([jsonData], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', 'data.json');
		link.click();
	};

	useEffect(() => {
		console.log(currentItems);
		dispatch(updateItems(currentItems));
	}, [currentItems, dispatch]);

  return (
		<Row gutter={16}>
			<Col span={12}>
				<Card>
					<Tabs
						defaultActiveKey="1"
						items={[
							{
								label: `Стулья`,
								key: '1',
								children: (
									<div className="d-flex" style={{ gap: "2px" }}>
										{items.map(item => (
											<DraggableBlock
												key={item.id}
												onDragStart={handleDragStart}
												onDragEnd={handleDragEnd}
												item={item}
											>
												<Image
													width={100}
													src="/img/scheduler/chair.png"
												/>
											</DraggableBlock>
										))}
									</div>
								),
							},
							{
								label: `Столы`,
								key: '2',
								children: `Content of Tab Pane 2`,
							}
						]}
					/>
					<Table dataSource={currentItems} columns={columns} />
				</Card>
				<Card>
					<Row gutter={5}>
						<Col span={8}>
							<Upload
								style={{ width: '100%' }}
								beforeUpload={(file) => false}
								onChange={handleUpload}>
								<Button
									style={{ width: '100%' }}
									danger block
									icon={<ImportOutlined />}
								>Импортировать</Button>
							</Upload>
						</Col>
						<Col span={8} >
							<Button
								type="primary"
								block
								icon={<DownloadOutlined />}
								disabled={!currentItems.length}
								onClick={saveAll}
							>Сохранить</Button>
						</Col>
						<Col span={8}>
							<Button
								type="primary"
								danger block
								disabled={!currentItems.length}
								onClick={handleDeleteAll}
							>Удалить все</Button>
						</Col>
					</Row>
				</Card>
				<Card>
					{jsonData && (
						<div>
							<h2>Данные из JSON файла:</h2>
							<pre>{JSON.stringify(jsonData, null, 2)}</pre>
						</div>
					)}
				</Card>
			</Col>
			<Col span={12}>
				<Card style={{ backgroundColor: '#000000', color: '#ffffff' }}>
					<div className="d-flex align-items-center justify-content-between">
						<div>Карта заведения</div>
						<div className="d-flex">
							<span className="mr-2">Сетка</span>
							<Switch checked={grid} onChange={handleChange} />
						</div>
					</div>
					<GridScheduler
						width={30}
						height={30}
						grid={grid}
						onDragOver={handleDragOver}
						onDragLeave={handleDragLeave}
						onDrop={handleDrop}
						dragElement={selectedItem}
						elements={currentItems}
					/>
				</Card>
			</Col>
		</Row>
  );
};

export default Scheduler;
