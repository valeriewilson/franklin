class Api::V1::ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def create
    item = Item.create(item_params)
    
    render json: item
  end

  def destroy
    Item.destroy(params[:id])
  end

  def update
    item = Item.find(params[:id])
    item.update_attributes(item_params)
    
    render json: item
  end

private

  def item_params
    params.require(:item).permit(
      :id, 
      :title, 
      :description, 
      :location,
      :due_date, 
      :priority,
      :category,
      :start_date,
      :duration_minutes
    )
  end
end