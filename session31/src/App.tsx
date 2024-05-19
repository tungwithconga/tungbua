import ClassComponent from './components/ClassComponent'

export default function App() {
  return (
    <div>App
      {/* App
     lifecycle - vòng đời của classcoponent 
     functionComponent không có vòng đời
     Vd:1 con người sẽ có vòng đời: Sinh ra  - Lớn lên - Trưởng thành - Lập gia đình - DIE 
     classComponet nó có vòng đời riêng của nó
     4 giai đoạn
     giai đoạn 1 : khởi tạo (initall)
    giai đoạn 2 :mounting (gắn vào UI)
        +thì chạy các phương thức sau 
        1.componentWillMount()
        =>thực thi 1 lần
        2.render()
            không nên setState ở trong phương thức Render này vì sao?

        3.componentDidmount()
        => thực thi 1 lần
    giai đoạn 3 :Updating (cập nhật)
    ==>có thể nhiều lần
    -khi nào xảy ra Update ?
    =>khi dữ liệu Props nhận về thay đổi hoặc dữ liệu State thay đổi thì giải đoạn Updating có thể xảy ra
    
    giai đoạn 4 : Unmouting (gỡ bỏ khỏi uI)
    =>thực thi 1 lần
      */}
       <ClassComponent></ClassComponent>

    </div>
  )
}
