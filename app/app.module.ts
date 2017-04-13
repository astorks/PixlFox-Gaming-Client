import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { WindowControlsComponent } from './components/window-controls.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientIndexComponent, AuthComponent } from "./pages.component";
import { PixlFoxClientService } from "./services/pixlfox.service";
import { OrderBy } from "./order-by";
import { LibraryComponent } from "./components/library.component";
import { ViewPanel } from "./view-panel";
import { CommunityComponent } from "./components/community.component";

import { ContextMenuModule } from 'angular2-contextmenu';
import { GameViewComponent } from "./components/game-view.component";
import { ChatComponent } from "./components/chat.component";
import { ViewPanelService } from "./services/view-panel.service";
import { ViewportModule } from 'angular2-viewport';
import { MessagePipe } from './pipes/message.pipe';
import { GameManagerService } from "./services/game-manager.service";

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		ContextMenuModule,
		ViewportModule
	],
	exports: [
		MessagePipe
	],
	declarations: [
		AppComponent,
		WindowControlsComponent,
		OrderBy,
		ViewPanel,
		[ClientIndexComponent, AuthComponent],
		[LibraryComponent, CommunityComponent, GameViewComponent, ChatComponent],
		MessagePipe
	],
	providers: [
		PixlFoxClientService,
		GameManagerService,
		ViewPanelService
	],
	entryComponents: [
		LibraryComponent,
		CommunityComponent,
		GameViewComponent,
		ChatComponent
	],
	bootstrap: [AppComponent],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class AppModule {
}