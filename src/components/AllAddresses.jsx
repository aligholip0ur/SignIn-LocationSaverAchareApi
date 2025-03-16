export default function AllAddress({ serverResponse }) {
  console.log(serverResponse);

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="col-lg-10 col-md-12 col-sm-12">
        <div className="card shadow-lg p-3 text-end" dir="rtl">
          <div className="card-body">
            <h4 className="text-center mb-3">لیست کاربران</h4>

            {serverResponse.length === 0 ? (
              <p className="text-center text-muted">هنوز کاربری ثبت نشده است</p>
            ) : (
              serverResponse.map((user, index) => (
                <div
                  key={index}
                  className="mb-4 p-3 bg-light rounded shadow-sm"
                >
                  <h5 className="text-center mb-3">کاربر {index + 1}</h5>
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped text-center">
                      <tbody>
                        <tr>
                          <th className="w-50 bg-primary text-white">نام</th>
                          <td>{user.first_name}</td>
                        </tr>
                        <tr>
                          <th className="bg-primary text-white">
                            نام خانوادگی
                          </th>
                          <td>{user.last_name}</td>
                        </tr>
                        <tr>
                          <th className="bg-primary text-white">
                            شماره تلفن همراه
                          </th>
                          <td>{user.coordinate_mobile}</td>
                        </tr>
                        <tr>
                          <th className="bg-primary text-white">
                            شماره تلفن ثابت
                          </th>
                          <td>{user.coordinate_phone_number || "—"}</td>
                        </tr>
                        <tr>
                          <th className="bg-primary text-white">آدرس</th>
                          <td>{user.address}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
