import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.angular_ph.ionic_workshop',
  appName: 'AngularPH x PWA',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
