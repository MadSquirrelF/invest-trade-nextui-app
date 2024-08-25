import { UseFormReset } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { ILogin } from "@/types/auth.interface";
import { AuthService } from "@/services/auth/auth.service";
import { DASHBOARD_URL } from "@/config/url.config";

export const useAuthMutation = (reset: UseFormReset<ILogin>) => {
  const { push, refresh } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: ILogin) => AuthService.login(data.email, data.password),
    onSuccess() {
      toast.success("Вы успешно вошли в систему");
      reset();
      push(DASHBOARD_URL.profile());
      refresh();
    },
    onError(error: any) {
      if (
        error.response &&
        error.response.status &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Ошибка при входе в систему");
      }
    },
  });

  return { mutate };
};
