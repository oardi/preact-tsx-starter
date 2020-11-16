import { createContext } from 'preact';
import { HttpService, LoggerService } from './shared';

export const AppContext = createContext<{
	httpService: HttpService,
	loggerService: LoggerService,
	// languageService: LanguageService
}>(null);
