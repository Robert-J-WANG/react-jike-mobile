import { DetailDataRes, fetchDetailApi } from "@/apis/detail";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useDetails = () => {
  const [detail, setDetail] = useState<DetailDataRes | null>(null);

  // 获取路由参数
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  // 调用接口获取数据
  useEffect(() => {
    const getDetail = async () => {
      const res = await fetchDetailApi(id!); // (id!)添加！解决类型错误
      setDetail(res.data.data);
    };
    getDetail();
  }, [id]);

  // 返回按钮的回调
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return { detail, goBack };
};
