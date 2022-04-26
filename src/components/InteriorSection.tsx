import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Interior } from "./Interior";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function InteriorSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //   const dataTab =
  //     {
  //       living: "1KPX0rDjqODbLawWY8_DjcIVsJyb_igDl",
  //       kitchen: "1juK5LsDs7JwTL9ZKL3gD1IvOgfhJVHnp",
  //       working: "121FFeebFXXIa8T4Tl357rGXhswXUqnK8",
  //       badroom: "1GCjON7EDYTcbq7bs8MS4TICXDNKAoUdx",
  //     },
  //   ;

  const dataTab = [
    {
      img1: {
        title: "Không gian phòng khách",
        desc: "Phòng khách là không gian chính của ngôi nhà, là nơi sum họp giađình",
        img: "1KPX0rDjqODbLawWY8_DjcIVsJyb_igDl",
      },

      img2: {
        title: "Không gian phòng bếp",
        desc: "Một bữa ăn ngon luôn là mong ước của mỗi gia đình. Không gian phòng ăn đóng vai trò rất quan trọng trong văn hóa Việt",
        img: "1juK5LsDs7JwTL9ZKL3gD1IvOgfhJVHnp",
      },

      img3: {
        title: "Không gian phòng ngủ Master",
        desc: "Không gian làm việc hiện đại mang lại nguồn cảm hứng",
        img: "1-PBUaqXirV2M7sYjCb7OTo5ZORzs18eZ",
      },

      img4: {
        title: "Không gian ngủ 2",
        desc: "Những mẫu phòng ngủ của HASCO mang đến cảm giác ấm cúng, gần gũi và thoải mái",
        img: "1aSLf_6JE7dtSU-KT-NWsRnmUKdO3QASB",
      },
    },

    // 2
    {
      img1: {
        title: "Không gian phòng khách",
        desc: "Phòng khách là không gian chính của ngôi nhà, là nơi sum họp giađình",
        img: "1BLZzAApKuARx21Onar0Q7l2-1yDmjKD1",
      },

      img2: {
        title: "Không gian phòng bếp",
        desc: "Một bữa ăn ngon luôn là mong ước của mỗi gia đình. Không gian phòng ăn đóng vai trò rất quan trọng trong văn hóa Việt",
        img: "1I8KvwdcBDkN0yMzHsFtCHHRPGDUFQ6SH",
      },

      img3: {
        title: "Không gian làm việc",
        desc: "Không gian làm việc hiện đại mang lại nguồn cảm hứng",
        img: "121FFeebFXXIa8T4Tl357rGXhswXUqnK8",
      },

      img4: {
        title: "Không gian ngủ",
        desc: "Những mẫu phòng ngủ của HASCO mang đến cảm giác ấm cúng, gần gũi và thoải mái",
        img: "1DijUzhAuUR8ufeFv8uLovzapK0VRtP0z",
      },
    },

    // 3
    {
      img1: {
        title: "Không gian phòng khách",
        desc: "Phòng khách là không gian chính của ngôi nhà, là nơi sum họp giađình",
        img: "1PxsHXBZO7rt5AMHFBP5c0oU_kUHYhy44",
      },

      img2: {
        title: "Không gian phòng bếp",
        desc: "Một bữa ăn ngon luôn là mong ước của mỗi gia đình. Không gian phòng ăn đóng vai trò rất quan trọng trong văn hóa Việt",
        img: "160zKT2V9OTmoxOgOFi7bR94dNVIavUNj",
      },

      img3: {
        title: "Không gian làm việc",
        desc: "Không gian làm việc hiện đại mang lại nguồn cảm hứng",
        img: "13hCP_KI5A5FGNEb_fzl42tegtiL4XYdb",
      },

      img4: {
        title: "Không gian tắm thư giãn",
        desc: "Những mẫu phòng ngủ của HASCO mang đến cảm giác ấm cúng, gần gũi và thoải mái",
        img: "1If8EpRfz2ePJ_sEjSuCnOF4yrsVt-J3O",
      },
    },

    // 4
    {
      img1: {
        title: "Không gian phòng khách",
        desc: "Phòng khách là không gian chính của ngôi nhà, là nơi sum họp giađình",
        img: "1CiH8MNpu75i6OEhWb7ZJ0er73pNokfSi",
      },

      img2: {
        title: "Không gian phòng bếp",
        desc: "Một bữa ăn ngon luôn là mong ước của mỗi gia đình. Không gian phòng ăn đóng vai trò rất quan trọng trong văn hóa Việt",
        img: "1cAyuX6_7iiGiViupVB9zsNq1zUr90JJx",
      },

      img3: {
        title: "Không gian ngủ Master",
        desc: "Không gian làm việc hiện đại mang lại nguồn cảm hứng",
        img: "1KstrhaCUN-NgLmQU7Nnm6VcW03y5adAm",
      },

      img4: {
        title: "Không gian ngủ 2",
        desc: "Những mẫu phòng ngủ của HASCO mang đến cảm giác ấm cúng, gần gũi và thoải mái",
        img: "15Kxm0NctclTP73lRe2Xg-iaz-_21QxOv",
      },
    },

    // 5
    {
      img1: {
        title: "Không gian phòng khách",
        desc: "Phòng khách là không gian chính của ngôi nhà, là nơi sum họp giađình",
        img: "1vBxf6NTobF6C9uax0iI9tAH3g5vsm1YE",
      },

      img2: {
        title: "Không gian phòng bếp",
        desc: "Một bữa ăn ngon luôn là mong ước của mỗi gia đình. Không gian phòng ăn đóng vai trò rất quan trọng trong văn hóa Việt",
        img: "19OSadTg3KFu1GZZtKual7eF2vTHbBluR",
      },

      img3: {
        title: "Không gian ngủ Master",
        desc: "Không gian làm việc hiện đại mang lại nguồn cảm hứng",
        img: "1vU_awLZdDVBsc4ekD6ihIP97ByEnw9hf",
      },

      img4: {
        title: "Không gian ngủ 2",
        desc: "Những mẫu phòng ngủ của HASCO mang đến cảm giác ấm cúng, gần gũi và thoải mái",
        img: "1CAn249PQCK1lsDT_CG1cURV6kuchrLt8",
      },
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="T3 A1-B1-D1" {...a11yProps(0)} />
          <Tab label="T3 C2-C4" {...a11yProps(1)} />
          <Tab label="T3 C2" {...a11yProps(2)} />
          <Tab label="T3 C1-C3" {...a11yProps(3)} />
          <Tab label="T3 B2-D2" {...a11yProps(4)} />
        </Tabs>
      </Box>
      {dataTab.map((item, index) => (
        <TabPanel value={value} index={index} key={index}>
          <Interior data={item} />
        </TabPanel>
      ))}
    </Box>
  );
}
