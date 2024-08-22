
import useMenu from './../../hooks/useMenu';
import { useState } from "react";
import orderCoverImg from "../../assets/shop/4.jpg"
import Cover from "../Shared/Cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const catagories = ["salad", "pizza", "soup", "desert", "drinks"];
    const { category } = useParams();
    const initialIndex = catagories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>bookshop | Order</title>
            </Helmet>
            <Cover img={orderCoverImg} title={"Order Food"}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                {/* <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel> */}

                <TabList>
                    <Tab>Horar</Tab>
                    <Tab>Skill</Tab>
                    <Tab>Story</Tab>
                    <Tab>Kids</Tab>
                    <Tab>Poem</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;

// react-tabs
// npm install --save react-tabs

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// const catagories = ["salad", "pizza", "soup", "desert", "drinks"];
// const { category } = useParams();
// const initialIndex = catagories.indexOf(category);

// const [tabIndex, setTabIndex] = useState(initialIndex)

{/* <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
<TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
</TabList>
<TabPanel>
    <OrderTab items={salad}></OrderTab>
</TabPanel>
<TabPanel>
    <OrderTab items={pizza}></OrderTab>
</TabPanel>
<TabPanel>
    <OrderTab items={soup}></OrderTab>
</TabPanel>
<TabPanel>
    <OrderTab items={dessert}></OrderTab>
</TabPanel>
<TabPanel>
    <OrderTab items={drinks}></OrderTab>
</TabPanel>
</Tabs> */}
