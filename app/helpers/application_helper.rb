module ApplicationHelper
  # 分页
  def pagination(records)
    render '/layouts/pagination', records: records
  end
end
