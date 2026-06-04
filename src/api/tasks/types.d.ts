export interface ITask {
	id: string;
	title: string;
	description: string;
	userId: string;
	completed: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface IResponseCreateTask {
	detail: {
		status: string;
	};
	data: ITask;
}

export interface IResponseGetTasks {
	detail: {
		status: string;
	};
	data?: ITask[];
}
