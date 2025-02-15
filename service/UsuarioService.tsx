import axios from 'axios';
import { BaseService } from './baseService';

export class UsuarioService extends BaseService {
    constructor() {
        super('/usuario');
    }
}
