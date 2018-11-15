class Api::V1::EventsController < ApplicationController
  def index
    render json: Event.all
  end

  def create
    event = Event.create(event_params)
    
    render json: event
  end

  def destroy
    Event.destroy(params[:id])
  end

  def update
    event = Event.find(params[:id])
    event.update_attributes(event_params)
    
    render json: event
  end

private

  def event_params
    params.require(:event).permit(
      :id,
      :title,
      :description,
      :location,
      :start_date,
      :end_date
    )
  end
end