class Api::V1::TasksController < ApplicationController
  def index
    render json: Task.order(:due_date, :priority)
  end

  def create
    task = Task.create(task_params)
    
    render json: task
  end

  def destroy
    Task.destroy(params[:id])
  end

  def update
    task = Task.find(params[:id])
    task.update_attributes(task_params)
    
    render json: task
  end

private

  def task_params
    params.require(:task).permit(
      :id,
      :title,
      :description,
      :due_date,
      :priority,
      :duration
    )
  end
end