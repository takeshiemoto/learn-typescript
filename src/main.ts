import { EcApp } from './ec-app/ec-app';
import './ddd-ex1';
import './generators/create-fibonacci-generator';

const ecApp = new EcApp();
ecApp.serve();
