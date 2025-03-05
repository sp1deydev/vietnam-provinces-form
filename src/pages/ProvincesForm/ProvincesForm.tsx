import { Button, Card, Divider, Form, Select, Typography } from "antd";
import { Fragment, useEffect, useState } from "react";
import { addressApi } from "../../api/publicApis/addressApi/addressApi";
import { handleAddressApiVersion } from "../../utils/handleAddressApi/handleAddressApiVersion";

const { Title } = Typography;
const { Option } = Select;

const ProvincesForm = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [addressApiUrl, setAddressApiUrl] = useState<any>(null);
  const [apiVersion, setApiVersion] = useState("v1");

  useEffect(() => {
    const URL = handleAddressApiVersion(apiVersion);
    setAddressApiUrl(URL);
  }, [apiVersion]);
  const getAllProvinces = async () => {
    if (!addressApiUrl) {
      return;
    }
    try {
      const response = await addressApi.get(addressApiUrl.LIST_PROVINCES);
      setProvinces(response.data);
    } catch (err) {
      console.error("Error fetching provinces:", err);
    }
  };
  const getAllDistricts = async () => {
    if (!addressApiUrl) {
      return;
    }
    try {
      const response = await addressApi.get(addressApiUrl.LIST_DISTRICTS);
      setDistricts(response.data);
    } catch (err) {
      console.error("Error fetching districts:", err);
    }
  };
  const getAllWards = async () => {
    if (!addressApiUrl) {
      return;
    }
    try {
      const response = await addressApi.get(addressApiUrl.LIST_WARDS);
      setWards(response.data);
    } catch (err) {
      console.error("Error fetching districts:", err);
    }
  };

  useEffect(() => {
    getAllProvinces();
    getAllDistricts();
    getAllWards();
  }, [apiVersion, addressApiUrl]);

  return (
    <Fragment>
      <Card style={{ width: "400px" }}>
        <Form layout="vertical">
          <Title level={4}>Vietnam Address</Title>
          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: "Please select your city." }]}
          >
            <Select placeholder="Select a city">
              {provinces.map((province: any) => (
                <Option key={province.code} value={province.name}>
                  {province.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="district"
            label="District"
            rules={[
              { required: true, message: "Please select your district." },
            ]}
          >
            <Select placeholder="Select a district">
              {districts.map((district: any) => (
                <Option key={district.code} value={district.name}>
                  {district.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="ward"
            label="Ward"
            rules={[{ required: true, message: "Please select your ward." }]}
          >
            <Select placeholder="Select a ward">
              {wards.map((ward: any) => (
                <Option key={ward.code} value={ward.name}>
                  {ward.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Divider />
          <Button type="primary" htmlType="submit" className="width-100">
            Confirm Address
          </Button>
        </Form>
      </Card>
    </Fragment>
  );
};

export default ProvincesForm;
