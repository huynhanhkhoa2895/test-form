export type Icons = "thanks-you" | "plan-arcade" | "plan-advanced" | "plan-pro";

export type updateState<T> = (_newState: T) => void;

export interface IAppContext extends IAppState {
  updateState: updateState<IAppStateChange>;
}

export type IAppState = {
  navStep: NavStep;
  isSticky: boolean;
  isMonthly: boolean;
  formData: FormData | null;
};

export type IAppStateChange = IAppState;

export type NavStep = {
  step: number;
  label?: string;
  title?: string;
  description?: string;
};

export type FormData =
  | {
      1: {
        name: string;
        email: string;
        phone: string;
      };
      2: {
        plan: string;
      };
      3: {
        additional: string[];
      };
    }
  | { [key in string]: any };

export type FieldSelectData = {
  label?: string;
  name: string;
  placeholder: string;
  value: FieldPrice;
};

export type FieldPrice = {
  mo: number;
  yr: number;
};
