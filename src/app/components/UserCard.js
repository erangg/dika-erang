// components/UserCard.js
export default function UserCard({ user }) {
  return (
    <div className="UserCard border rounded px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-black">{user.name}</p>
        <p className="text-sm text-gray-600">{user.email}</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {user.roles.map((role, idx) => (
            <span
              key={idx}
              className="text-xs bg-black text-white px-2 py-0.5 rounded"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-2 sm:mt-0 font-semibold text-right">
        {user.status === 'Aktif' ? (
          <span className="text-black">Aktif</span>
        ) : (
          <span className="text-gray-500">Suspended</span>
        )}
      </div>
    </div>
  )
}
