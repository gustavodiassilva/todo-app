
import { hideMessage, showMessage } from 'react-native-flash-message';

type ToastType = 'success' | 'error' | 'info' | 'warning';

export type ToastOptions = {
  duration?: number;
  description?: string;
}

export const notifier = {
  success(message: string, options?: ToastOptions){
    showMessage({
      message, 
      description: options?.description,
      type: 'success',
      duration: options?.duration ?? 3000,
      icon: 'success',
      floating: true,
    })
    
  },
  error(message: string, options?: ToastOptions){
    showMessage({
      message,
      description: options?.description,
      type: 'danger',
      duration: options?.duration ?? 4000,
      icon: 'danger',
      floating: true,
    });
  },
  info(message: string, options?: ToastOptions) {
    showMessage({
      message,
      description: options?.description,
      type: 'info',
      duration: options?.duration ?? 3000,
      icon: 'info',
      floating: true,
    });
  },
  warning(message: string, options?: ToastOptions) {
    showMessage({
      message,
      description: options?.description,
      type: 'warning',
      duration: options?.duration ?? 3500,
      icon: 'warning',
      floating: true,
    });
  },
  dismiss() {
    hideMessage();
  },
  async promise<T>(
    p: Promise<T>,
    msgs: {loading: string, success: (v: T) => string; error: (e: any) => string,

    },
    options?: ToastOptions,

  ): Promise<T> {
    showMessage({
      message: msgs.loading,
      type: 'info',
      duration: 1000,
      icon: 'info',
      floating: true,
    });
    try {
      const val = await p;
      this.success(msgs.success(val), options);
      return val;
    } catch (e) {
      this.error(msgs.error(e), options);
      throw e;
    }
  },

}