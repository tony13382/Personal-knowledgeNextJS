'use client'
import { useEffect, useState } from 'react'
import ToTopButton from '../components/ToTopButton'

interface LinkItem {
  name: string
  type: string
  tags: string[]
  url: string
  cover: string
}

export default function Home() {
  const [types, setTypes] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [links, setLinks] = useState<LinkItem[]>([])
  const [selectedType, setSelectedType] = useState('全部')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [loading, setLoading] = useState(true) // ✅ 新增 loading 狀態

  useEffect(() => {
    async function fetchData() {
      setLoading(true) // 載入前設為 true
      try {
        const res = await fetch('/api/data')
        const json = await res.json()
        setTypes(json.types)
        setTags(json.tags)
        setLinks(json.links)
      } catch (err) {
/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Toggle a tag in the selected tags state.
   *
   * If the tag is already selected, it will be removed from the selected tags.
   * If the tag is not selected, it will be added to the selected tags.
   *
   * @param {string} tag The tag to toggle.
   */
/******  7f223772-dcf2-4464-9952-79e6407b7dee  *******/        console.error('取得資料失敗', err)
      } finally {
        setLoading(false) // 完成時設為 false
      }
    }

    fetchData()
  }, [])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const filteredLinks = links.filter((item) => {
    const matchType = selectedType === '全部' || item.type === selectedType
    const matchTags =
      selectedTags.length === 0 || selectedTags.some((tag) => item.tags.includes(tag))
    return matchType && matchTags
  })

  const iconMap: Record<string, string> = {
    Facebook: 'bi-facebook',
    Instagram: 'bi-instagram',
    電子報: 'bi-envelope-fill',
    Podcast: 'bi-mic-fill',
    Website: 'bi-window',
    Youtube: 'bi-youtube',
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="p-5 m-2 bg-stone-800 text-white rounded-lg flex items-center">
            <h1 className="text-2xl font-bold">知識推薦獲取來源</h1>
            <div className='flex-1 flex justify-end items-center'>
              <a className="p-2 hover:bg-stone-500 rounded-md"
                href="http://lianglu.uk" target='_blank'>個人網頁</a>
            </div>
          </div>

          {/* ✅ Loading 提示 */}
          {loading ? (
            <p className="text-center text-gray-500 text-xl py-20">正在載入資料中...</p>
          ) : (
            <>
              {/* 篩選區塊 */}
              <div className="mb-6">
                <p className="font-semibold mb-2">選擇資料型態：</p>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-1 rounded-full border ${selectedType === type
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black'
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="font-semibold mb-2">限定標籤：</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-1 rounded-full border ${selectedTags.includes(tag)
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black'
                        }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* 顯示結果 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredLinks.map((item) => (
                  <a
                    key={item.name + item.type}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
                  >
                    <img
                      src={item.cover}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-500 mb-1">
                        <i className={`bi ${iconMap[item.type] ?? ''} mr-2`}></i>
                        {item.type}
                      </p>
                      <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                    </div>
                    <div className="px-4 pb-4 text-sm text-gray-600">
                      {item.tags.join('、')}
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <ToTopButton /> {/* ✅ 加在這裡 */}
    </>
  )
}
