import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/user-list.data.json";
import axios from "axios";
import Loading from "../../../../../components/shared-components/Loading";
import {APP_PREFIX_PATH} from "../../../../../configs/AppConfig";
import {Link} from "react-router-dom";

export class UserList extends Component {

	state = {
		users: [],
		userProfileVisible: false,
		selectedUser: null
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.setState({
					users: data
				})
			})
			.catch(error => console.error(error));
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const { users, userProfileVisible, selectedUser } = this.state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<Link to={`${APP_PREFIX_PATH}/main/setting/edit-profile/${record.id}`}>
							<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
						</Link>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Username',
				dataIndex: 'username',
				sorter: {
					compare: (a, b) => {
						a = a.username.toLowerCase();
						b = b.username.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				render: (_, record) => (
					<a href={`tel:${record.phone}`}>
						{record.phone}
					</a>
				),
				sorter: {
					compare: (a, b) => a.phone.length - b.phone.length,
				},
			},
			{
				title: 'Website',
				dataIndex: 'website',
				render: (_, record) => (
					<a href={`https://${record.website}`} target="_blank">
						{record.website}
					</a>
				),
				sorter: {
					compare: (a, b) => {
						a = a.website.toLowerCase();
						b = b.website.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Company',
				dataIndex: 'company',
				render: (_, record) => (
					<span>{record.company.name}</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.company.name.toLowerCase();
						b = b.company.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right d-flex justify-content-end">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<div className="table-responsive">
					{users.length
						? (
							<Table columns={tableColumns} dataSource={users} rowKey='id' />
						)
						: <Loading/>
					}
				</div>
				<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
			</Card>
		)
	}
}

export default UserList
