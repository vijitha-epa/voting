import React from 'react';
import WeeklySales from './WeeklySales';
import { Row, Col, Carousel } from 'react-bootstrap';
import {
  marketShare,
  totalOrder,
  totalSales,
  weeklySalesData,
  weather,
  products,
  members,
  storageStatus,
  files,
  users,
  topProducts,
  runningProjects
} from 'data/dashboard/default';

import TotalOrder from './TotalOrder';
import MarketShare from './MarketShare';
import TotalSales from './TotalSales';
import RunningProjects from './RunningProjects';
import StorageStatus from './StorageStatus';
import SpaceWarning from './SpaceWarning';
import BestSellingProducts from './BestSellingProducts';
import SharedFiles from './SharedFiles';
import ActiveUsers from './ActiveUsers';
import BandwidthSaved from './BandwidthSaved';
import TopProducts from './TopProducts';
import Weather from './Weather';
import Banner from './Banner';
import MemberSummery from "./MemberSummery";

const Dashboard = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <Banner />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col md={6}>
          <MemberSummery members={members} isPositive={true} />
        </Col>
        <Col md={6}>
          <MemberSummery members={members} isPositive={false} />
        </Col>
      </Row>

      {/*<Row className="g-3 mb-3">*/}
      {/*  <Col lg={7} xl={8}>*/}
      {/*    <BestSellingProducts products={products} />*/}
      {/*  </Col>*/}
      {/*  <Col lg={5} xl={4}>*/}
      {/*    <SharedFiles files={files} className="h-lg-100" />*/}
      {/*  </Col>*/}
      {/*</Row>*/}
      {/*<Row className="g-3 mb-3">*/}
      {/*  <Col md={6} xxl={3}>*/}
      {/*    <WeeklySales data={weeklySalesData} />*/}
      {/*  </Col>*/}
      {/*  <Col md={6} xxl={3}>*/}
      {/*    <TotalOrder data={totalOrder} />*/}
      {/*  </Col>*/}
      {/*  <Col md={6} xxl={3}>*/}
      {/*    <MarketShare data={marketShare} radius={['100%', '87%']} />*/}
      {/*  </Col>*/}
      {/*  <Col md={6} xxl={3}>*/}
      {/*    <Weather data={weather} />*/}
      {/*  </Col>*/}
      {/*</Row>*/}

      {/*<Row className="g-3 mb-3">*/}
      {/*  <Col lg={6}>*/}
      {/*    <RunningProjects data={runningProjects} />*/}
      {/*  </Col>*/}
      {/*  <Col lg={6}>*/}
      {/*    <TotalSales data={totalSales} />*/}
      {/*  </Col>*/}
      {/*</Row>*/}

      {/*<Row className="g-3 mb-3">*/}
      {/*  <Col lg={6} xl={7} xxl={8}>*/}
      {/*    <StorageStatus className="h-lg-100" data={storageStatus} />*/}
      {/*  </Col>*/}
      {/*  <Col lg={6} xl={5} xxl={4}>*/}
      {/*    <SpaceWarning />*/}
      {/*  </Col>*/}
      {/*</Row>*/}

      <Row className="g-3">
        <Col sm={6} xxl={3}>
          <ActiveUsers className="h-100" users={users} />
        </Col>
        <Col sm={6} xxl={3} className="order-xxl-1">
          <BandwidthSaved />
        </Col>
        <Col xxl={6}>
          <TopProducts data={topProducts} className="h-100" />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
