import React, { Component } from 'react'
import { UserOutlined, LockOutlined, CreditCardOutlined, BellOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Route, Navigate, useLocation, Routes } from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from './EditProfile';
import { useParams } from 'react-router-dom';

const url = '/app/pages/setting'

const MenuItem = ({icon, path, label}) => {

	return (
		<>
			{icon}
			<span>{label}</span>
			<Link to={`${url}/${path}`} />
		</>
	)
}

const SettingOption = () => {

	const location = useLocation();

	const locationPath = location.pathname.split('/')

	const currentpath = locationPath[locationPath.length - 1]

	return (
		<Menu
			mode="inline"
			selectedKeys={[currentpath]}
			items={[
				{
					key: 'edit-profile',
					label: <MenuItem label="Edit Profile" icon={<UserOutlined />} path="edit-profile" />
				}
			]}
		/>
	);
};

const SettingContent = () => {

	let userId = useParams()["*"].split("/");
	userId = userId[userId.length - 1];
	console.log(useParams());

	return (
		<Routes>
			<Route path="edit-profile/:userid?" element={<EditProfile userId={userId} />} />
			<Route path="*" element={<Navigate to="edit-profile" replace />} />
		</Routes>
	)
}

export class Setting extends Component {
	render() {
		return (
			<InnerAppLayout 
				sideContentWidth={320}
				sideContent={<SettingOption />}
				mainContent={<SettingContent />}
			/>
    	);
	}
}

export default Setting
